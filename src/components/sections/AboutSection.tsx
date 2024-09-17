const AboutSection = () => {
  return (
    <section id="about-me">
      <div className="py-8 px-0 sm:py-16 xl:px-16 w-full">
        <h2 className="text-4xl font-bold mb-6 font-serif">About me</h2>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="py-16 rounded-md bg-slate-800 flex flex-col justify-center items-center w-full">
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-16 px-4">
              <div className="sm:text-right text-3xl font-bold">
                <p>
                  Fullstack Engineer with 5+ years of experience in building
                  customer-centric products.
                </p>
              </div>
              <div>
                <p>
                  I am a fullstack developer specializing in building scalable
                  applications from web interfaces to underlying infrastructure.
                  My customer-centric approach ensures that the solutions I
                  create not only meet technical requirements but also deliver
                  real value to end-users. When I am not crafting robust systems
                  for clients, I channel my passion into personal projects,
                  constantly exploring new technologies and pushing the
                  boundaries of my skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
