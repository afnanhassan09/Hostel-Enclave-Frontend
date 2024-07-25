
import MenuBar from "./Helpers/menu";




export default function RootLayout({ children }) {
  return (
  <div>
     
        <header className=" sticky top-0 z-50">
        <MenuBar></MenuBar>
        </header>
        {children}
</div>
  );
}
