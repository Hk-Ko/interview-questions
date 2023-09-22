import React from "react";
import { cssQAs, htmlQAs, javaQAs } from "./Questions";

const App = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-5 h-full">
        <h1 className="text-center text-2xl font-bold">92 Q&A for Interview</h1>

        <div className="mt-10">
          <h1 className="text-xl font-semibold">HTML Q&A</h1>
          <div className="flex flex-col gap-5">
            {htmlQAs.map((qas, index) => (
              <div key={qas.id} className="flex w-full h-full">
                <div className="w-[2%]">{index}</div>
                <div className="w-[90%]">
                  <p className="text-sm font-semibold text-red-600">
                    {qas.question}
                  </p>
                  <p className="text-sm font-semibold text-blue-600">
                    {qas.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-xl font-semibold">CSS Q&A</h1>
          <div className="flex flex-col gap-5">
            {cssQAs.map((qas, index) => (
              <div key={qas.id} className="flex w-full h-full">
                <div className="w-[2%]">{index}</div>
                <div className="w-[90%]">
                  <p className="text-sm font-semibold text-red-600">
                    {qas.question}
                  </p>
                  <p className="text-sm font-semibold text-blue-600">
                    {qas.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-xl font-semibold">CSS Q&A</h1>
          <div className="flex flex-col gap-5">
            {javaQAs.map((qas, index) => (
              <div key={qas.id} className="flex w-full h-full">
                <div className="w-[2%]">{index}</div>
                <div className="w-[90%]">
                  <p className="text-sm font-semibold text-red-600">
                    {qas.question}
                  </p>
                  <p className="text-sm font-semibold text-blue-600">
                    {qas.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
