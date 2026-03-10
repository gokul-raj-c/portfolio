import "./Loader.css";

function Loader() {
  return (
    <div className="terminal-loader">

      <div className="terminal-box">

        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="dots">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <div className="terminal-title">
            gokul-portfolio.exe
          </div>
        </div>

        {/* Terminal Body */}
        <div className="terminal-body">
          <p>&gt; initializing portfolio...</p>
          <p>&gt; loading projects...</p>
          <p>&gt; loading skills...</p>
          <p>&gt; connecting modules...</p>
          <p className="success">
            &gt; welcome ___ <span className="cursor">|</span>
          </p>

          <div className="progress">
            <div className="progress-bar"></div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Loader;