import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { Card } from './components/Card.tsx';
import { Counter } from './components/Counter.tsx';
import ChaiList from './components/ChaiList.tsx';
import { OrderForm } from './components/OrderForm.tsx';
import { ReactOrNextCard } from './components/ReactOrNextCard.tsx';
const menu = [
    { id: 1, name: "Masala", price: 30 },
    { id: 2, name: "Elaichi", price: 35 },
    { id: 3, name: "Lemon", price: 10 }
];
function App() {
    return (_jsx(_Fragment, { children: _jsxs("section", { id: "center", children: [_jsx("div", { className: "hero", children: "Vite + React" }), _jsx(Card, { name: "i phone 16", price: 60000, isSpecial: true }), _jsx(Card, { name: "i phone 17", price: 70000, isSpecial: true }), _jsx("div", { children: _jsx(Counter, {}) }), _jsx("br", {}), _jsx("div", { children: _jsx(ChaiList, { items: menu }) }), _jsx("br", {}), _jsx("div", { children: _jsx(OrderForm, { onSubmit: (order) => { console.log("Placed :", order.name, order.cups); } }) }), _jsx("br", {}), _jsx("div", { children: _jsx(ReactOrNextCard, { title: 'Title of the Card', footer: _jsx("button", { children: "Order Now" }) }) })] }) }));
}
export default App;
//# sourceMappingURL=App.js.map