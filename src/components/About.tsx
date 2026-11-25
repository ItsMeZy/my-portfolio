import { motion, useReducedMotion } from 'framer-motion'
import { Activity, Camera, Gamepad2, Headphones, Server, Utensils } from 'lucide-react'

const interests = [
  { Icon: Activity, title: 'Basketball & running', detail: 'I play league basketball around Como and Cantù as a guard or small forward. I’ve run the StraLugano 10 km and I’m training for a half marathon.' },
  { Icon: Camera, title: 'Photography & video', detail: 'I shoot with a Sony Alpha 6300 and edit in Lightroom. Sorting my own RAW shoots inspired my photo culling app.' },
  { Icon: Utensils, title: 'Cooking & meal prep', detail: 'I like making fresh pasta, slow-cooking meals, and revisiting Filipino and Italian family recipes.' },
  { Icon: Server, title: 'Home lab & local AI', detail: 'I use a Raspberry Pi 3 for media and self-hosting experiments, and try local coding agents with open-weight models.' },
  { Icon: Gamepad2, title: 'Co-op & building games', detail: 'I enjoy modded Minecraft, especially Create Chronicles and Prominence II, as well as Monster Hunter Wilds and Valorant.' },
  { Icon: Headphones, title: 'Music & stories', detail: 'I listen to LANY and Forrest Frank and spend downtime with anime, manga, and science fiction.' },
]

export default function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" className="section about-section">
      <div className="container about-layout">
        <div className="section-header about-intro">
          <p className="eyebrow">About me</p>
          <h2>Beyond the code</h2>
          <p className="section-copy">Photography and cooking have both given me ideas for software I can use myself. Away from the screen, I spend most of my time training, playing basketball, or trying a new recipe.</p>
        </div>
        <ul className="interests">
          {interests.map(({ Icon, title, detail }, index) => (
            <motion.li
              key={title}
              initial={reduceMotion ? false : { opacity: .72, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .22 }}
              transition={{ duration: reduceMotion ? 0 : .34, delay: reduceMotion ? 0 : index % 2 * .08 }}
            >
              <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{detail}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
