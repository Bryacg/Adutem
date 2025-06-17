import Navbar from "../ui/Navbar"

export default function Home() {
    return (
        <div className="min-h-screen py-12">
            

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Misión Section */}
                <section className="bg-white/70 shadow-xl rounded-xl p-8 mb-10 border border-gray-200">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-6 leading-tight">
                        Nuestra Misión
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        Formar académicos, científicos y profesionales responsables, humanistas, éticos y solidarios,
                        comprometidos con los objetivos del desarrollo nacional. La universidad se enfoca en la docencia
                        con investigación, generando y aplicando nuevos conocimientos, y promoviendo la difusión de
                        saberes y culturas, tal como lo establece la Constitución de la República del Ecuador.
                    </p>
                </section>

                {/* Visión Section */}
                <section className="bg-white/70 shadow-xl rounded-xl p-8 border border-gray-200">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-6 leading-tight">
                        Nuestra Visión
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        <strong className="text-indigo-600">ADUTEM</strong> aspira a ser una institución líder en educación
                        superior en Ecuador, destacándose por la creación, desarrollo, transmisión y difusión de la
                        ciencia, la técnica y la cultura, con reconocimiento social y proyección a nivel regional y mundial.
                    </p>
                </section>
            </main>
        </div>
    )
}