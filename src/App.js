import './App.css';
import VendorForm from './components/Vendor/Vendor';
import PhonePlanForm from './components/PhonePlan/PhonPlan';
import ServiceCarrier from './components/ServiceCarrier/ServiceCarrier';
import SimReturnForm from './components/SimCardReturn/SimCardReturn';
import DeviceOrderForm from './components/DeviceOrder/DeviceOrder';
// import SimcardAdd from './components/SimcardAdd/SimcardAdd';
function App() {
  return (
    <div className="App">
      {/* <SimcardAdd /> */}
      <ServiceCarrier />
      <PhonePlanForm />
      <VendorForm />
      <SimReturnForm />
      <DeviceOrderForm />
    </div>
  );
}

export default App;
