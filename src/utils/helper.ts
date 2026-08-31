export const removeSkeleton = () => {
   const placeholders = document.querySelectorAll(".placeholder");

   if (placeholders) {
      placeholders.forEach((el) => {
         el.classList.remove("placeholder");
      });
   }
};

// const consultMsg = `%20saya%20ingin%20bertanya%20mengenai%20pembuatan%20website`;
// export const waDefaultMsg = waPhone + consultMsg;

// export const sendWa = (event: any, plan?: string) => {
//    event?.preventDefault();
//    const planMsg = plan ? plan?.trim()?.replaceAll(" ", "%20") : null;
//    const msg = planMsg ? `%20saya%20tertarik%20pembuatan%20website%20${planMsg}` : consultMsg;

//    const waLink = waPhone + msg;
//    window.open(waLink, "_blank", "noopener,noreferrer");
// };

const waPhone = `https://wa.me/6285157715228?text=hallo%20webtangsel,`;

export const waConsult = () => {
   const consultMsg = `%20saya%20ingin%20bertanya%20mengenai%20pembuatan%20website`;
   return waPhone + consultMsg;
};

export const waOrder = (plan: string) => {
   const msg = plan?.trim()?.replaceAll(" ", "%20");
   const orderMsg = `%20saya%20tertarik%20pembuatan%20website%20${msg}`;

   return waPhone + orderMsg;
};
