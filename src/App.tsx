import ExpenseDashboard from './components/ExpenseDashboard'
import SidebarNav from './components/SidebarNav'
import './App.css'

function App() {
  return (
    <div className="app">
      <SidebarNav />
      <main className="main-container">
        <ExpenseDashboard />
      </main>
    </div>
  )
}

export default App