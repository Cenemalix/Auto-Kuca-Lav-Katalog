import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import tiresData from "./JSON/tires_data.json";
import "./MiddleSection.css";

function MiddleSection() {
  const [filters, setFilters] = useState({
    season: "",
    width: "",
    height: "",
    diameter: "",
    supplier: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    navigate(`/tires?${params.toString()}`);
  };

  const seasonOptions = [
    ...new Set(tiresData.map((t) => t.season).filter(Boolean)),
  ].sort();

  const widthOptions = [
    ...new Set(tiresData.map((t) => t.width).filter(Boolean)),
  ].sort((a, b) => a - b);

  const heightOptions = [
    ...new Set(tiresData.map((t) => t.height).filter(Boolean)),
  ].sort((a, b) => a - b);

  const diameterOptions = [
    ...new Set(tiresData.map((t) => t.diameter).filter(Boolean)),
  ].sort((a, b) => a - b);

  const supplierOptions = [
    ...new Set(tiresData.map((t) => t.supplier).filter(Boolean)),
  ].sort();

  return (
    <div className="MiddleSection" id="tires">
      <form onSubmit={handleSubmit} className="form-container">
        <select name="season" value={filters.season} onChange={handleChange}>
          <option value="" disabled hidden>
            Sezona
          </option>
          <option value="">Sve sezone</option>
          {seasonOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <select name="supplier" value={filters.supplier} onChange={handleChange}>
          <option value="" disabled hidden>
            Proizvođač
          </option>
          <option value="">Svi proizvođači</option>
          {supplierOptions.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <select name="width" value={filters.width} onChange={handleChange}>
          <option value="" disabled hidden>
            Širina gume
          </option>
          {widthOptions.map((w) => (
            <option key={w} value={w}>
              {w}
            </option>
          ))}
        </select>

        <select name="height" value={filters.height} onChange={handleChange}>
          <option value="" disabled hidden>
            Visina gume
          </option>
          {heightOptions.map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>

        <div className="select-button-wrap">
          <select
            name="diameter"
            value={filters.diameter}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Promjer gume
            </option>
            {diameterOptions.map((i) => (
              <option key={i} value={i}>{`R${i}`}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">
          Pretraži gume
        </button>
      </form>
    </div>
  );
}

export default MiddleSection;
