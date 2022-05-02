import React from 'react';
import { Routes, Route } from "react-router-dom";
import Part1 from "../components/admin/part1";
import Part2 from "../components/admin/part2";
import Part3 from "../components/admin/part3";
import Part4 from "../components/admin/part4";
import Part5 from "../components/admin/part5";
import Part6 from "../components/admin/part6";
import Part7 from "../components/admin/part7";
import Part8 from "../components/admin/part8";
import Part9 from "../components/admin/part9";
function Admin() {
    return (
        <div className="blogPost">
            <Routes>
                <Route path="part1" element={<Part1 />} />
                <Route path="part2" element={<Part2 />} />
                <Route path="part3" element={<Part3 />} />
                <Route path="part4" element={<Part4 />} />
                <Route path="part5" element={<Part5 />} />
                <Route path="part6" element={<Part6 />} />
                <Route path="part7" element={<Part7 />} />
                <Route path="part8" element={<Part8 />} />
                <Route path="part9" element={<Part9 />} />
            </Routes>
        </div>
    );
}

export default Admin;
