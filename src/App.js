import './App.css';
import VendorForm from './components/Vendor/Vendor';
import PhonePlanForm from './components/PhonePlan/PhonPlan';
import ServiceCarrier from './components/ServiceCarrier/ServiceCarrier';
import SimReturnForm from './components/SimCardReturn/SimCardReturn';
import DeviceOrderForm from './components/DeviceOrder/DeviceOrder';
import SimCardOrdrForm from './components/SimCardOrders/SimCardOrders';
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
      <SimCardOrdrForm />
    </div>
  );
}

export default App;
