import './App.css';
import SchoolForm from './components/RegistertaionForm/SchoolForm';
import UniversityForm from './components/RegistertaionForm/UniversityForm';
import WorkExperience from './components/RegistertaionForm/WorkExperience';

function App() {
  return (
    <>
    <div className="row w-100">
      <div className="col">
      <UniversityForm/>
      </div>
      <div className="col">
        <SchoolForm/>
      </div>
      <div className="col">
        <WorkExperience/>
      </div>
    </div>
      
    </>
  );
}

export default App;
