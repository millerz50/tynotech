export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1">
        <a className="text-xl font-bold">TechStore</a>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered"
        />
        <button className="btn btn-primary">Cart</button>
      </div>
    </div>
  );
}
