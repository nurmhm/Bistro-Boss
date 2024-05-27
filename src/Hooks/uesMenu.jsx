// import { useQuery } from "@tanstack/react-query";


// const useMenu = () => {
// //    const [menu, setMenu] = useState([]);
// //   useEffect(()=>{

// //    fetch('http://localhost:5000/menu')
// //       .then(res=>res.json())
// //       .then(data=>setMenu(data))
// //   },[])
// //   return [menu];


// const { data: menu = [], isLoading, error } = useQuery({
//   queryKey: ['menu'],
//   queryFn: async () => {
//     const res = await fetch('http://localhost:5000/menu')
//     return res.data;
//   },
// });

// return { menu, isLoading, error };
// }




// export default useMenu;

import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const { data: menu = [], isLoading, error } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/menu');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    },
  });

  return [menu, isLoading, error ];
};

export default useMenu;

