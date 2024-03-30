import React from "react";
// tailwindcssのスタイルを適用するためのimport
// import "../../globals.css";
import Ingredients from "../../components/ingredients";
import Method from "../../components/method";

const Recipe: React.FC = () => {
  return (
    <div>
      {/* 仮のHeader */}
      <header>
        <h1 className="">Recipe Page</h1>
      </header>

      {/* Mainコンテンツ */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4">クロワッサン</h2>

        <div className="mb-4">
          <span className="font-semibold">調理時間: </span>
          <span>１時間</span>
        </div>

        <Ingredients />

        <Method />
      </main>

      {/* 仮のFooter */}
      <footer>
        <p>© 2024 Recipe App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Recipe;
