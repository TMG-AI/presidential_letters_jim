import { useState, useMemo } from 'react';
import { letters } from '../data/letters';

// Get the letter whose month/day is closest to today (past or future)
const getCurrentLetter = () => {
  const today = new Date();
  const todayMonth = today.getMonth() + 1; // 1-12
  const todayDay = today.getDate();

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December'];

  let closestLetter = letters[0];
  let smallestDiff = Infinity;

  for (const letter of letters) {
    const dateMatch = letter.writtenFrom.match(/(\w+)\s+(\d+)/);
    if (dateMatch) {
      const month = monthNames.indexOf(dateMatch[1]) + 1;
      const day = parseInt(dateMatch[2]);

      // Calculate days difference (using a reference year)
      const todayDate = new Date(2000, todayMonth - 1, todayDay);
      const letterDate = new Date(2000, month - 1, day);
      const diff = Math.abs(todayDate - letterDate) / (1000 * 60 * 60 * 24);

      if (diff < smallestDiff) {
        smallestDiff = diff;
        closestLetter = letter;
      }
    }
  }

  return closestLetter;
};

const PresidentialInbox = () => {
  const currentLetter = useMemo(() => getCurrentLetter(), []);
  const [selectedLetter, setSelectedLetter] = useState(currentLetter);
  const [showArchive, setShowArchive] = useState(false);
  const [showContext, setShowContext] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#faf8f5' }}>
      {/* Header - Deep Navy */}
      <header style={{ backgroundColor: '#1e3a5a' }} className="text-white py-6 px-4">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-serif tracking-wide">The Presidential Inbox</h1>
            <p className="text-sm mt-1" style={{ color: '#94a3b8' }}>Letters for Jim Messina</p>
          </div>
          {letters.length > 1 && (
            <button
              onClick={() => setShowArchive(!showArchive)}
              className="px-4 py-2 rounded text-sm transition-colors"
              style={{
                backgroundColor: showArchive ? '#2d4a6a' : '#2d4a6a',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#3d5a7a'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#2d4a6a'}
            >
              {showArchive ? 'Current Letter' : `Archive (${letters.length})`}
            </button>
          )}
        </div>
      </header>

      <main className="max-w-3xl mx-auto py-8 px-4">
        {showArchive ? (
          /* Archive View */
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-xl font-serif text-stone-800 mb-6">Letter Archive</h2>
            <div className="space-y-3">
              {letters.map((letter) => (
                <button
                  key={letter.id}
                  onClick={() => {
                    setSelectedLetter(letter);
                    setShowArchive(false);
                    setShowContext(false);
                  }}
                  className="w-full text-left p-4 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-stone-800">{letter.president}</p>
                      <p className="text-sm text-stone-600 mt-1">"{letter.subject}"</p>
                      <p className="text-xs text-stone-400 mt-1">{letter.eventTitle}</p>
                    </div>
                    <span className="text-xs text-stone-400">{letter.writtenFrom}</span>
                  </div>
                </button>
              ))}
            </div>
            <p className="text-center text-stone-400 text-sm mt-8">
              {52 - letters.length} letters to come
            </p>
          </div>
        ) : selectedLetter && (
          /* Letter View */
          <div className="space-y-6">
            {/* Letter Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Letter Header - Deep Navy */}
              <div style={{ backgroundColor: '#1e3a5a' }} className="text-white p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm" style={{ color: '#94a3b8' }}>{selectedLetter.president}</p>
                    <h2 className="text-2xl font-serif mt-1">{selectedLetter.subject}</h2>
                  </div>
                  <p className="text-sm" style={{ color: '#94a3b8' }}>{selectedLetter.writtenFrom}</p>
                </div>
              </div>

              {/* Letter Body - Warm Cream */}
              <div className="p-5 sm:p-8" style={{ backgroundColor: '#faf8f5' }}>
                <div className="bg-white p-5 sm:p-8 rounded shadow-inner border border-stone-200">
                  <div className="font-serif">
                    {selectedLetter.letter.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-4 text-stone-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-stone-200">
                    <p className="italic text-stone-600 font-serif text-lg">
                      {selectedLetter.signature}
                    </p>
                    <p className="text-xs text-stone-400 mt-4">
                      Digital Presidential Twin | AI Historical Simulation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Historical Context Toggle */}
            <button
              onClick={() => setShowContext(!showContext)}
              className="w-full py-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-stone-600 flex items-center justify-center gap-2"
            >
              {showContext ? 'Hide' : 'Show'} Historical Context
              <svg
                className={`w-4 h-4 transition-transform ${showContext ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Historical Context Panel */}
            {showContext && (
              <div className="bg-white rounded-lg shadow-lg p-5 sm:p-8">
                <h3 className="text-lg font-serif text-stone-800 mb-4">
                  {selectedLetter.eventTitle}
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {selectedLetter.historicalContext.background}
                </p>

                {/* What President Knew */}
                <div className="bg-amber-50 border border-amber-200 rounded p-4 mb-6">
                  <h4 className="text-sm font-medium text-amber-800 mb-2">
                    What the President Knew
                  </h4>
                  <p className="text-amber-900 text-sm leading-relaxed">
                    {selectedLetter.historicalContext.whatPresidentKnew}
                  </p>
                </div>

                {/* Timeline */}
                <div className="bg-stone-50 rounded p-4 mb-6">
                  <h4 className="text-sm font-medium text-stone-500 uppercase tracking-wide mb-3">
                    Timeline
                  </h4>
                  <ul className="space-y-2">
                    {selectedLetter.historicalContext.keyFacts.map((fact, i) => (
                      <li key={i} className="text-stone-600 text-sm flex items-start gap-2">
                        <span className="text-stone-400">•</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-stone-300 pl-4 italic text-stone-600">
                  "{selectedLetter.historicalContext.quote.text}"
                  <footer className="text-sm text-stone-400 mt-2 not-italic">
                    — {selectedLetter.historicalContext.quote.attribution}
                  </footer>
                </blockquote>
              </div>
            )}

            {/* Navigation */}
            {letters.length > 1 && (
              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    const idx = letters.findIndex(l => l.id === selectedLetter.id);
                    if (idx < letters.length - 1) {
                      setSelectedLetter(letters[idx + 1]);
                      setShowContext(false);
                    }
                  }}
                  disabled={letters.findIndex(l => l.id === selectedLetter.id) === letters.length - 1}
                  className="text-stone-500 hover:text-stone-700 disabled:opacity-30 text-sm"
                >
                  ← Older Letter
                </button>
                <button
                  onClick={() => {
                    const idx = letters.findIndex(l => l.id === selectedLetter.id);
                    if (idx > 0) {
                      setSelectedLetter(letters[idx - 1]);
                      setShowContext(false);
                    }
                  }}
                  disabled={letters.findIndex(l => l.id === selectedLetter.id) === 0}
                  className="text-stone-500 hover:text-stone-700 disabled:opacity-30 text-sm"
                >
                  Newer Letter →
                </button>
              </div>
            )}

            {/* Footer */}
            <div className="text-center py-4">
              <p className="text-stone-400 text-sm">A gift for Jim Messina</p>
              <p className="text-stone-300 text-xs mt-1">
                AI Historical Simulation — Not actual presidential correspondence
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default PresidentialInbox;
