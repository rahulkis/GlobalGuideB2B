import React, { useState, useEffect } from 'react';
import SearchImage from '../../assets/images/search.svg';
import RightArrowImage from '../../assets/images/rightarrow.png';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { Link } from 'react-router-dom';
import { API_BASE_URL, IMAGE_BASE_URL } from '../../constants/Api';
import { BRANDS } from '../../constants/AppConstants';
import axios from 'axios';

function Brands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getBrands();
  }, []);

  const getBrands = async () => {
    try {
      const getBrandList = await axios.get(API_BASE_URL + BRANDS.GET_BRANDS);
      console.log({getBrandList})
      if (getBrandList.status === 200) {
        setBrands(getBrandList.data.data.company_brands);
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <>
      <Header />
      <div className="container">
        <div className="release-tab">
          <div className="release-tab-header d-flex align-items-center">
            <ul className="nav nav-tabs mb-0 border-bottom-0" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active ps-4"
                  id="releases-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#releases"
                  type="button"
                  role="tab"
                  aria-controls="releases"
                  aria-selected="true"
                >
                  Brands
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="drafts-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#drafts"
                  type="button"
                  role="tab"
                  aria-controls="drafts"
                  aria-selected="false"
                >
                  Drafts
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="archived-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#archived"
                  type="button"
                  role="tab"
                  aria-controls="archived"
                  aria-selected="false"
                >
                  Archived
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#review"
                  type="button"
                  role="tab"
                  aria-controls="review"
                  aria-selected="false"
                >
                  Pending review
                </button>
              </li>
            </ul>
            <div className="ms-auto">
              <Link href="#" className="btn custom_outline_btn me-3">
                Import Catalog Data
              </Link>
              <Link href="#" className="btn custom_btn">
                New release
              </Link>
            </div>
          </div>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="releases" role="tabpanel" aria-labelledby="releases-tab">
              <div className="tab-filters">
                <div className="filter-selects d-flex align-items-center">
                  <select className="w-auto form-select me-3">
                    <option>Filter</option>
                    <option>Sort by</option>
                  </select>
                  <div className="d-flex align-items-center">
                    <label className="text-white">Sort by:</label>
                    <select className="w-auto form-select">
                      <option>Newest/ Recent / Top Appreciatedlter</option>
                      <option>Recent</option>
                      <option>Newest</option>
                      <option>Top Appreciatedlter</option>
                    </select>
                  </div>
                  <Link href="#" className="ms-auto">
                    <img className="search" src={SearchImage} alt="" />
                  </Link>
                </div>
              </div>

              <div className="release-listing">
                <div className="row">
                  {brands &&
                    brands.length > 0 &&
                    brands.map((brand) => (
                      <div key={brand.id} className="col-lg-6">
                        <div className="release-item">
                          <div className="release-item-img">
                            <img src={IMAGE_BASE_URL + brand.brand_logo} className="img-fluid" alt="img" />
                          </div>
                          <div className="release-item-content">
                            <h2>
                              {brand.brand_story}
                            </h2>
                            <h4><span className='release_name'>{brand.brand_name}</span></h4>
                            <ul className="release-rating">
                              <li>5.0 Rating</li>
                              <li>• 753 Reviews</li>
                            </ul>
                            <Link href="#" className="view_btn">
                              View details <img className="ms-1" src={RightArrowImage} alt="img" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="drafts" role="tabpanel" aria-labelledby="drafts-tab">
              Drafts
            </div>
            <div className="tab-pane fade" id="archived" role="tabpanel" aria-labelledby="archived-tab">
              archived
            </div>
            <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
              review
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Brands;
