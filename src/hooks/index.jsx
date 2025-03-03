import PropTypes from "prop-types";
import { UserProvider } from "./UserContext";
import { CartProvider } from "./CartContext";

const AppProvider = ({ children }) => {

  return (
  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
  )
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppProvider;