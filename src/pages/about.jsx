export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-10 flex flex-col">

      <h1 className="text-5xl font-extrabold text-indigo-700 text-center mb-10">
        🧠 Suicide Prevention Resource Center (SPRC)
      </h1>

      <section className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed flex-grow">

        <p>
          The <strong>Suicide Prevention Resource Center (SPRC)</strong> is the nation’s trusted leader providing comprehensive resources, research, and technical assistance focused on preventing suicide and promoting mental health awareness across communities.
        </p>

        <p>
          🚀 Our mission is to reduce the incidence of suicide by equipping individuals, communities, and professionals with the tools and knowledge they need to support at-risk individuals.
        </p>

        <h2 className="text-3xl font-semibold text-indigo-600 mt-10">📚 What SPRC Offers</h2>

        <ul className="list-disc pl-8 space-y-4">
          <li><strong>Comprehensive Research & Data:</strong> Latest studies and evidence-based strategies guiding prevention efforts.</li>
          <li><strong>Training & Capacity Building:</strong> Specialized programs to help professionals recognize warning signs and support at-risk individuals.</li>
          <li><strong>Resource Library:</strong> Downloadable guides, toolkits, brochures, and reports focused on suicide prevention.</li>
          <li><strong>Technical Assistance & Support:</strong> Expert guidance for communities and organizations implementing local strategies.</li>
          <li><strong>Community Collaboration:</strong> Helping local agencies and policymakers implement proven practices to reduce suicide risk.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-indigo-600 mt-10">🌟 Why It Matters</h2>

        <p>
          Every year, over 700,000 people globally die by suicide, and millions more attempt it.  
          Suicide is preventable when early interventions like education, awareness, and community support are in place.
        </p>

        <h2 className="text-3xl font-semibold text-indigo-600 mt-10">📊 Key Statistics</h2>

        <ul className="list-disc pl-8 space-y-4">
          <li>1 in 4 people experience mental health challenges annually.</li>
          <li>75% do not seek help due to social stigma.</li>
          <li>Up to 50% of suicides could be prevented with early intervention and awareness.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-indigo-600 mt-10">🌱 How LifeCare Helps</h2>

        <ul className="list-disc pl-8 space-y-4">
          <li>📝 Journaling for Self-Reflection — Helps users track mood & thoughts.</li>
          <li>🎮 Mind Relax Games — Interactive calming exercises to manage stress.</li>
          <li>📚 Awareness Resources — Scientifically-backed knowledge from SPRC’s best practices.</li>
        </ul>

        <p className="font-semibold text-indigo-600 mt-8 text-center text-xl">
          “Together, we can break the silence, reduce stigma, and provide hope for a brighter future.”
        </p>

        <p className="mt-10 text-center text-gray-700 text-lg">
          Learn more by visiting the official SPRC website:  
          <a 
            href="https://www.sprc.org" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-semibold hover:underline"
          >
            https://www.sprc.org
          </a>
        </p>

      </section>

    </div>
  );
}
