import React from "react";

const Landing = () => {
    const bgImage = "https://3pllinks.com/wp-content/uploads/2022/09/empty-warehouse-storage-distribution-centers_41470-4881.jpg";
    return (
        <div className={"min-h-screen bg-gray-100 flex flex-col"}>
            <header className={"bg-white shadow"}>
                <div className={"max-w-7xl mx-auto py-6 px-6 sm:px-6 flex items-center justify-between"}>
                    <h1 className={"text-3xl font-bold text-gray-800"}>Inventory Management System</h1>
                    <button
                        className={"px-5 bg-orange-700 p-2 text-slate-300 hover:text-slate-100 rounded-2xl"}>
                        <a href={"/login"}>Login</a>
                    </button>
                </div>
            </header>
            <main className="flex-grow" style={{background: `url(${bgImage})`}}>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="py-6 px-4 sm:px-0">
                        <div
                            className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
                            <h3 className={"text-2xl font-semibold text-gray-200"}>Warehouse Department{" "}
                            </h3>
                        </div>
                    </div>
                </div>
            </main>
            <footer className={"bg-white shadow mt-8"}>
                <div className={"max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8"}>
                    <p className="text-center text-gray-500">
                        &copy; 2024 Inventory Management System. All rights reserved
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
