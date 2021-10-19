import "@material-tailwind/react/tailwind.css";
import 'tailwindcss/tailwind.css'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>

      <Component {...pageProps} />

    </Provider>
  )
}


// MyApp.getInitialProps = async ({ ctx }) => {
//   console.log
//   // if (ctx && ctx.req && cookie && ctx.res && ctx?.req?.headers && ctx?.res?.writeHead && ctx?.res?.end) {
   

//   //   if (!token && !["/login","/", "/404", '/sign-up', '/forgot-password', '/change-password', '/otp-verification', '/promotion', '/cancellation-policy', '/terms-conditions', '/privacy-policy'].includes(ctx.pathname.replace("/[id]",""))) {
//   //     ctx.res.writeHead(301, { Location: '/login' })
//   //     ctx.res.end()
//   //     return
//   //   }
//   // }
// };

export default MyApp