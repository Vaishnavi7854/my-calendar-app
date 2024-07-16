import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/Homepage';
import ExpensePage from './pages/ExpensePage';
import ToDoPage from './pages/ToDoPage';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [expenses, setExpenses] = useState([]);
  const [todos, setTodos] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  selectedDate={selectedDate}
                  expenses={expenses}
                  totalExpense={totalExpense}
                  onDateClick={handleDateClick}
                  setTotalExpense={setTotalExpense}
                />
              }
            />
            <Route
              path="/expenses"
              element={
                <ExpensePage
                  selectedDate={selectedDate}
                  expenses={expenses}
                  setExpenses={setExpenses}
                  setTotalExpense={setTotalExpense}
                />
              }
            />
            <Route
              path="/todos"
              element={
                <ToDoPage
                  selectedDate={selectedDate}
                  todos={todos}
                  setTodos={setTodos}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;