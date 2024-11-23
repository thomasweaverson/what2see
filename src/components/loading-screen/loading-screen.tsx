function LoadingScreen(): JSX.Element {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      // height: '100vh',
      // background: '#18020200'
    },
    loader: {
      width: '100px',
      height: '100px',
      border: '6px solid rgb(84, 80, 62)',
      borderTop: '6px solid rgb(201, 179, 126)',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    },
    '@keyframes spin': `
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    `,
  };

  const injectKeyframes = () => (
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  );

  return (
    <>
      {injectKeyframes()}
      <div style={styles.container}>
        <div style={styles.loader}></div>
      </div>
    </>
  );
}

export default LoadingScreen;
