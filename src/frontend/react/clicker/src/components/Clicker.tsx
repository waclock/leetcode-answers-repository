import React, { CSSProperties, useState } from 'react'


const styles: {[key: string]: CSSProperties} = {
  container: {
    display: 'flex',
    backgroundColor: '#eee',
    height: '100vh',
    alignItems: 'center', // vertical
    justifyContent: 'center', // horizontal,
    flexDirection: 'column',
  }
}

export const Clicker = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div style={styles.container}>
      <div>{`Current count: ${counter}`}</div>
      <button onClick={() => setCounter(counter+1)}>Some button</button>
    </div>
  )
}
