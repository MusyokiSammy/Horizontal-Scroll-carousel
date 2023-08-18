import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


function App() {
  return (
    <div className="bg-neutral-800">
      <div className="flex flex-col h-48 items-center justify-center">
        <span className="uppercase font-semibold text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo incidunt nostrum fuga maiores ex! Expedita consectetur fugit sit numquam soluta temporibus at pariatur?
        </span>
        <h1 className="text-neutral-500 text-2xl font-bold mt-10 ">Scroll Down</h1>
      </div>
      <HozintalScrollCarousel/>
      <div className="flex flex-col-reverse h-48 items-center justify-center">
        <span className="uppercase font-semibold text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo incidunt nostrum fuga maiores ex! Expedita consectetur fugit sit numquam soluta temporibus at pariatur?
        </span>
        <h1 className="text-neutral-500 text-2xl font-bold mb-10 ">Scroll Up</h1>
      </div>
    </div>
  );
}

export default App;


const HozintalScrollCarousel = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])
  return (
    <section className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {
            cards.map((card)=> {
              return (
                <Card card={card} key={card.id}/>
              )
              
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

const Card = ( { card }) => {
  return (
    <div key={card.id}
    className="group relative h-[450px] w-[450px] overflow-hidden border border-neutral-600 rounded-lg bg-neutral-200"
    >
      <div 
      style={{
        backgroundImage: `url(${card.url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black text-white backdrop-blur-lg">{card.title}</p>
      </div>
    </div>
  )
}

const cards = [
  {
    url: "https://images.unsplash.com/photo-1682685797742-42c9987a2c34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1692317785860-2ec5796434f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1692289933571-2ffb93f4ed99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1682685797857-97de838c192e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1692117162315-35dad308ebf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://images.unsplash.com/photo-1691036738987-81385c2f18ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1692111046507-3f4574def341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Title 7",
    id: 7,
  },
  {
    url: "https://images.unsplash.com/photo-1690988964825-72e4dec0bbfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Title 8",
    id: 8,
  },
];