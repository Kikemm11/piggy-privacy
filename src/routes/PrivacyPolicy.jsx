import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="max-w-10xl p-2 text-center">
      
      {/* Title */}
      <div className="text-center mt-16">
        <h1 className="text-6xl font-poppins text-inverseDark">Política de Privacidad</h1>
        <p className="text-xl font-italic font-arial mt-2 text-black">
          Última actualización: 17/03/2026
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mt-20 px-4">
        <div className="bg-secondaryDark hover:bg-[#E3DFC9] p-6 rounded-xl shadow-md w-full max-w-5xl flex flex-col transition-opacity duration-300 text-left">

          <h2 className="text-3xl font-poppins mb-4 text-detailsBold">1. Información general</h2>
          <p className="text-lg text-gray-700 mb-4">
            Esta aplicación ha sido desarrollada por LogiCatStudio. La privacidad de los usuarios es una prioridad, 
            por lo que esta política describe cómo se recopila, utiliza y protege la información.
          </p>

          <h2 className="text-3xl font-poppins mb-4 text-detailsBold">2. Datos recopilados</h2>
          <p className="text-lg text-gray-700 mb-4">
            Esta aplicación no recopila ningún tipo de dato personal identificable del usuario. 
            Únicamente se manejan datos financieros ingresados manualmente por el usuario con el 
            propósito exclusivo de garantizar el correcto funcionamiento de la aplicación.
          </p>

          <h2 className="text-3xl font-poppins mb-4 text-detailsBold">3. Almacenamiento de la información</h2>
          <p className="text-lg text-gray-700 mb-4">
            Toda la información proporcionada por el usuario se almacena de forma local en el dispositivo. 
            La aplicación no transmite, sincroniza ni comparte estos datos con servidores externos ni con terceros bajo ningún criterio.
          </p>

          <h2 className="text-3xl font-poppins mb-4 text-detailsBold">4. Seguridad</h2>
          <p className="text-lg text-gray-700 mb-4">
            La información almacenada localmente está protegida mediante medidas de seguridad razonables 
            para evitar accesos no autorizados. Sin embargo, el usuario es responsable de mantener la seguridad 
            de su propio dispositivo.
          </p>

          <h2 className="text-3xl font-poppins mb-4 text-detailsBold">5. Contacto</h2>
          <p className="text-lg text-gray-700">
            Si tienes preguntas sobre esta política de privacidad, puedes contactar a través de: logicatstudio@gmail.com
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-40 mr-10 text-right text-inverseDark text-lg font-poppins italic self-end">
        <p>“La privacidad no es una opción, es un derecho.”</p>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;