export default function Loader() {
   return (
      <div
         className="d-flex justify-content-center"
         style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9,
         }}
      >
         <div
            className="spinner-border text-primary"
            role="status"
            style={{
               width: "3rem",
               height: "3rem",
            }}
         ></div>
      </div>
   );
}
