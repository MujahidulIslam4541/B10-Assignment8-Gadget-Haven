import React from 'react'

export default function About() {
    return (
        <div className="w-11/12 mx-auto mt-6 space-y-8">
            {/* About Us Section */}
            <section className="border-2 rounded-lg p-6 bg-gray-50 shadow-md">
                <h2 className="text-3xl font-bold text-blue-600 mb-4">About Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Welcome to <span className="font-semibold">Gadget Haven</span> – Your ultimate destination for premium gadgets and cutting-edge technology!
                </p>
                <p className="text-gray-700 leading-relaxed">
                    At Gadget Haven, we specialize in bringing you the best selection of tech products to suit every lifestyle. Whether you're a gadget enthusiast or just looking for reliable devices, we’ve got you covered.
                </p>
            </section>

            {/* Our Mission and Vision */}
            <section className="border-2 rounded-lg p-6 bg-white shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    To make high-quality gadgets accessible to everyone, combining functionality, innovation, and style to elevate your digital experience.
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                    To become the go-to platform for tech lovers worldwide, offering an unmatched variety of gadgets that blend quality and value.
                </p>
            </section>

            {/* Our Products Section */}
            <section className="border-2 rounded-lg p-6 bg-gray-50 shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Products</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                    At Gadget Haven, you’ll find a wide range of products, including:
                </p>
                <ul className="list-disc pl-8 space-y-3 text-gray-800">
                    <li>
                        <span className="text-xl font-semibold text-gray-900">Smartphones:</span> Stay connected with the latest models.
                    </li>
                    <li>
                        <span className="text-xl font-semibold text-gray-900">Laptops:</span> Power-packed devices for work, gaming, and more.
                    </li>
                    <li>
                        <span className="text-xl font-semibold text-gray-900">Tablets:</span> The perfect blend of portability and performance.
                    </li>
                    <li>
                        <span className="text-xl font-semibold text-gray-900">Smartwatches:</span> Track your fitness, stay notified, and add style to your wrist.
                    </li>
                    <li>
                        <span className="text-xl font-semibold text-gray-900">AirPods & Earbuds:</span> Enjoy superior sound quality and seamless connectivity.
                    </li>
                    <li>
                        <span className="text-xl font-semibold text-gray-900">And More:</span> Explore a variety of accessories and tech essentials.
                    </li>
                </ul>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Why Choose <span className="text-blue-600">Gadget Haven?</span>
                </h2>
                <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-gray-900">Diverse Selection:</span> We bring you the latest and most popular gadgets from top brands.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-gray-900">Quality Guaranteed:</span> Every product undergoes thorough checks to ensure it meets our high standards.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-gray-900">Customer-Centric Approach:</span> Your satisfaction is our top priority.
                    </p>
                </div>
                <div className="mt-8 text-center">
                    <h1 className="text-xl font-bold text-blue-600">
                        Thank you for being a part of our journey.
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Together, let’s explore the limitless possibilities of technology!
                    </p>
                </div>
            </section>
        </div>

    )
}
