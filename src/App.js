import './App.css';

function App() {
  return (
    <div>
      <InsightCard values={[0, 0 ,1, 2]}/>
    </div>
  );
}

function InsightCardBox({ company, value }) {
  let boxClass;
  if (company === "pltr") {
    boxClass = "Insight-pltr"
  } else if (company === "amc") {
    boxClass = "Insight-amc"
  } else if (company === "gme") {
    boxClass = "Insight-gme"
  } else {
    boxClass = "Insight-penn"
  }
  return (
    <div className={boxClass}>
      {value}
    </div>
  )
}

function InsightCard({ values }) {
  return (
    <div className="Insight-card">
      <div>
        <InsightCardBox company={"pltr"} value={values[0]}/>
        <InsightCardBox company={"amc"} value={values[1]}/>
      </div>
      <div>
        <InsightCardBox company={"gme"} value={values[2]}/>
        <InsightCardBox company={"penn"} value={values[3]}/>
    </div>
  </div>
  )
}

export default App;
