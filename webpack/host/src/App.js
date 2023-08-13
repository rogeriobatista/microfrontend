import React, { lazy, Suspense } from 'react'

function App() {

  const Title = lazy(() => import('RemoteApp/title'));

  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<div>Loading Header...</div>}>
          <Title />
        </Suspense>
      </header>
    </div>
  );
}

export default App;