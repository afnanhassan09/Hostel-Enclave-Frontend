// pages/index.js


export default function HomeO() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://www.shutterstock.com/image-photo/gloomy-dark-corridor-closed-doors-600nw-1763607740.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>   
      <div className="relative flex items-center justify-center h-full text-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Hostel Enclave</h1>
          <p className="text-lg md:text-2xl mb-8">Book a hostel for your next trip</p>
          <button className="px-6 py-3 bg-transparent hover:bg-black text-white font-semibold rounded-md">
         <Link href="/hostels">See Hostels</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
