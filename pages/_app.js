import "../styles/globals.css";
import {Provider} from "react-redux";
import Layout from "../layouts/Layout";
import {wrapper} from "../reducers";


function MyApp({Component, ...rest}) {
  const {store, props} = wrapper.useWrappedStore(rest);
  const {pageProps} = props;

  return (
      <Provider store={store}>
          <Layout>
            <Component {...pageProps} />

          </Layout>
      </Provider>
  );
}

export default MyApp;
