import { motion } from "motion/react";
import { Star } from "lucide-react";

const stories = [
  {
    author: "Ali K.",
    role: "Software Engineer",
    text: "I wore the 'Focus' oversized tee to my startup pitch. Felt like armor. The fabric quality is insane for the price point. Teetales actually understands what we want.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    author: "Sara M.",
    role: "Graphic Designer",
    text: "Created matching custom tees for our design agency's anniversary. The DTF print quality came out flawless. Highly recommend the create-your-own feature!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    author: "Hamza T.",
    role: "University Student",
    text: "The Urdu quotes collection hits different. Finally a brand that blends modern oversized streetwear silhouettes with pure desi aesthetics without looking cheap.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function CustomerStories() {
  return (
    <div className="bg-bg-alt py-24 sm:py-32 border-b border-brand-primary/10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[10px] uppercase font-bold tracking-widest text-brand-accent mb-4">
            Testimonials
          </h2>
          <h3 className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tighter text-brand-primary mb-2">
            Customers are saying
          </h3>
          <p className="mt-2 text-brand-primary/70 leading-relaxed font-medium text-base sm:text-lg">
            See how people are wearing their stories across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg-card p-10 border border-brand-primary/5 flex flex-col rounded-2xl shadow-sm"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(story.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-4 h-4 fill-brand-accent text-brand-accent"
                  />
                ))}
              </div>
              <blockquote className="flex-1 text-sm text-brand-primary/80 leading-relaxed font-medium mb-8">
                "{story.text}"
              </blockquote>
              <div className="flex items-center gap-4 mt-auto border-t border-brand-primary/10 pt-6">
                <img
                  src={story.image}
                  alt={story.author}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div>
                  <div className="text-xs font-bold text-brand-primary">
                    {story.author}
                  </div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-brand-primary/40 mt-1">
                    {story.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
