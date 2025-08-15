import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PublicLayout from "./layouts/public-layout.tsx"
import AuthenticationLayout from './layouts/auth-layout.tsx'
import HomePage from './routes/home.tsx'
import { SignInPage } from "./routes/sign-in.tsx"
import { SignUpPage } from "./routes/sign-up.tsx"
import ProtectRoutes from "./layouts/protected-routes.tsx"
import {MainLayout} from "./layouts/main-layout.tsx"
import { Generate } from "./components/generate.tsx"
import { Dashboard } from "./routes/dashboard.tsx"
import { CreateEditPage } from "./routes/create-edit-page.tsx"
import { MockLoadPage } from "./routes/mock-load-page.tsx"
import { MockInterviewPage } from "./routes/mock-interview-page.tsx"
import { Feedback } from "./routes/feedback.tsx"
import ContactForm from "./components/contact.tsx"
import About from "./components/about.tsx"
import Services from "./components/services.tsx"

function App() {
  return (
    <Router>
      <Routes>
        {/* public routes */}

        <Route element={<PublicLayout/>}>
          <Route index element={<HomePage/>} />
          <Route path="/contact" element={<ContactForm/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Route>

        {/* authentication layout */}
        <Route element={<AuthenticationLayout/>}>
          <Route path="/signin" element={<SignInPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />

        </Route>

        {/* protected routes */}
        <Route element={<ProtectRoutes><MainLayout/></ProtectRoutes>}>
        
          <Route element={<Generate/>} path="/generate">
            <Route index element={<Dashboard/>}></Route>
            <Route path=":interviewId" element={<CreateEditPage/>}></Route>
            <Route path="interview/:interviewId" element={<MockLoadPage/>}></Route>
            <Route path="interview/:interviewId/start" element={<MockInterviewPage/>}></Route>
            <Route path="feedback/:interviewId" element={<Feedback/>}></Route>
          </Route>
        </Route>

      </Routes>
    </Router>
  )
}

export default App