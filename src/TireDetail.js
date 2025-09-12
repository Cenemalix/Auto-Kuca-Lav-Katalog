import React, { useMemo, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TireCardInfo from "./TireCardInfo";
import { v4 as uuid } from "uuid";
import "./TireDetail.css";
import { filterTires } from "./helper/filterTires";

function TireDetail({ tires }) {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);

  const brand = queryParams.get("supplier") || "";
  const width = queryParams.get("width") || "";
  const height = queryParams.get("height") || "";
  const diameter = queryParams.get("diameter") || "";
  const season = queryParams.get("season") || "";

  const [localFilters, setLocalFilters] = useState({
    supplier: brand,
    season: season,
    height: height,
    width: width,
    diameter: diameter,
  });

  useEffect(() => {
    setLocalFilters({
      supplier: brand,
      season: season,
      height: height,
      width: width,
      diameter: diameter,
    });
  }, [brand, season, height, width, diameter]);

  const supplierOptions = useMemo(
    () => [...new Set(tires.map((t) => t.supplier).filter(Boolean))].sort(),
    [tires]
  );
  const seasonOptions = useMemo(
    () => [...new Set(tires.map((t) => t.season).filter(Boolean))].sort(),
    [tires]
  );
  const heightOptions = useMemo(
    () =>
      [...new Set(tires.map((t) => t.height).filter(Boolean))].sort(
        (a, b) => a - b
      ),
    [tires]
  );
  const widthOptions = useMemo(
    () =>
      [...new Set(tires.map((t) => t.width).filter(Boolean))].sort(
        (a, b) => a - b
      ),
    [tires]
  );
  const diameterOptions = useMemo(
    () =>
      [...new Set(tires.map((t) => t.diameter).filter(Boolean))].sort(
        (a, b) => a - b
      ),
    [tires]
  );

  const handleChangeLocal = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    const params = new URLSearchParams();

    Object.entries(localFilters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    navigate(`/tires?${params.toString()}`);
  };

  const filteredTires = filterTires(tires, {
    brand,
    width,
    height,
    diameter,
    season,
  });

  const resetFilters = () => {
    const emptyFilters = {
      supplier: "",
      season: "",
      height: "",
      width: "",
      diameter: "",
    };
    setLocalFilters(emptyFilters);
    navigate("/tires");
  };

  return (
    <div className="tire-detail-container">
      <div className="sidebar">
        <h3>Filteri</h3>

        <label>
          Proizvođač:
          <select
            name="supplier"
            value={localFilters.supplier}
            onChange={handleChangeLocal}
          >
            <option value="">Svi</option>
            {supplierOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label>
          Sezona:
          <select
            name="season"
            value={localFilters.season}
            onChange={handleChangeLocal}
          >
            <option value="">Sve</option>
            {seasonOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label>
          Širina:
          <select
            name="width"
            value={localFilters.width}
            onChange={handleChangeLocal}
          >
            <option value="">Sve</option>
            {widthOptions.map((w) => (
              <option key={w} value={w}>
                {w}
              </option>
            ))}
          </select>
        </label>

        <label>
          Visina:
          <select
            name="height"
            value={localFilters.height}
            onChange={handleChangeLocal}
          >
            <option value="">Sve</option>
            {heightOptions.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
        </label>

        <label>
          Promjer:
          <select
            name="diameter"
            value={localFilters.diameter}
            onChange={handleChangeLocal}
          >
            <option value="">Svi</option>
            {diameterOptions.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>

        <button onClick={applyFilters} className="filterButton">Filtriraj</button>
        <button onClick={resetFilters} className="resetButton">Reset</button>
      </div>

      <div className="tire-detail">
        {filteredTires.length > 0 ? (
          <>
            <div className="tire-container" id="tires">
              {filteredTires.map((tire) => (
                <TireCardInfo
                  key={uuid()}
                  name={tire.description1}
                  img={tire.itemPicture1}
                  dimension={`${tire.width}/${tire.height} R${tire.diameter}`}
                  price={tire.price || ""}
                  showDetails={true}
                />
              ))}
            </div>
          </>
        ) : (
          <h2>Nema rezultata za odabrane filtere.</h2>
        )}
      </div>
    </div>
  );
}

export default TireDetail;
