// import UserProfile from './component/context/UserContext'
// import UserActions from './component/component2/UserActions'
// import UserInfo from './component/component2/UserInfo'

// import ThameProvider from "./component/ThemeContextWithToggle/Context/ThemeContext";
// import ThemeCard from "./component/ThemeContextWithToggle/Component/ThemeCard";
// import ThemeText from "./component/ThemeContextWithToggle/Component/ThemeText";
// import StyleToggle from "./component/ThemeContextWithToggle/Component/ThemeToggle";

// import Dashboard from "./component/MultipleContextsImplementation/component/Dashboard";
// import Header from "./component/MultipleContextsImplementation/component/Header";
// import  LanguageProvider  from "./component/MultipleContextsImplementation/context/LanguageContext";
// import  NotificationProvider  from "./component/MultipleContextsImplementation/context/NotificationContext";

// import UserProvider  from "./component/CustomHookForContext/context/UserContext";
// import UserInfo from "./component/CustomHookForContext/component/UserInfo";
// import UserAction from "./component/CustomHookForContext/component/UserActions";

import CartProvider from "./component/ContextAPIForShoppingCart/context/CartContext";
import CartDisplay from "./component/ContextAPIForShoppingCart/component/CartDisplay";
import ProductList from "./component/ContextAPIForShoppingCart/component/ProductList";


import "./App.css";

function App() {
  return (
    <>
      {/* <UserProfile>
        <h2>Web User Dengan Context</h2>
        <UserInfo/>
        <UserActions/>
      </UserProfile> */}
      {/* 
        <ThameProvider>
          <div style={{ padding: "20px" }}>
                <h2>Theme Context "Light / Dark"</h2>
                <StyleToggle/>
                <ThemeCard/>
                <ThemeText/>
          </div>
        </ThameProvider> */}

      {/* <LanguageProvider>
        <NotificationProvider>
          <Header />
          <Dashboard />
        </NotificationProvider>
      </LanguageProvider> */}

        {/* <UserProvider>
          <h2>Login Simulate Sederhana</h2>
          <UserInfo/>
          <UserAction/>
        </UserProvider> */}

            <CartProvider>
              <h2>Shopping Cart With Context API</h2>
              <ProductList/>
              <CartDisplay/>
            </CartProvider>
    </>
  );
}

export default App;
