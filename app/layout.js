//shared between routes
export default function Layout({children}){
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}