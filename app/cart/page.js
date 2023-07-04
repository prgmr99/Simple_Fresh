import Hello from "./data";

export default function Cart() {
  let cart = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={cart[0]} />
      <CartItem item={cart[1]} />
      <CartItem item={cart[2]} />
      <Banner content="현대카드" />
      <Button color="blue" />
    </div>
  );
}

function Button(props) {
  return (
    <button className="btn" style={{ backgroundColor: props.color }}>
      결제
    </button>
  );
}

function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>;
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
