import React, { useState, useEffect } from 'react';
import SearchImage from '../../assets/images/search.svg';
import RightArrowImage from '../../assets/images/rightarrow.png';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL, IMAGE_BASE_URL } from '../../constants/Api';
import { DISTILLERIES } from '../../constants/AppConstants';

function Distilleries() {
  const [distilleriesByCompanyId, setDistilleriesByCompanyId] = useState([]);

  useEffect(() => {
    handleDistilleriesByCompanyId();
  }, []);

  const handleDistilleriesByCompanyId = async () => {
    try {
      ;
      const getDistilleriesList = await axios.get(API_BASE_URL + DISTILLERIES.GET_ALL_DISTILLERIES_BY_COMPANY_ID);
      if (getDistilleriesList.status === 200) {
        setDistilleriesByCompanyId(getDistilleriesList.data.data);
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
                  Distilleries
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
              {/* <li className="nav-item" role="presentation">
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
              </li> */}
            </ul>
            <div className="ms-auto">
              <Link href="#" className="btn custom_outline_btn me-3">
                Add using template
              </Link>
              <Link href="#" className="btn custom_btn">
                Add Distillery
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
                  {distilleriesByCompanyId &&
                    distilleriesByCompanyId.length > 0 &&
                    distilleriesByCompanyId.slice(0, 2).map((distillery, index) => (
                      <div key={index} className="col-lg-6">
                        <div className="release-item">
                          <div className="release-item-img">
                            <img src={IMAGE_BASE_URL + distillery.logo} className="img-fluid" alt="img" />
                          </div>
                          <div className="release-item-content">
                            <h2>
                              {distillery.story}
                            </h2>
                            {/* <Link href="#" className="name_edit">
                            <img src={NameEditImage} alt="img" width="20" />
                          </Link> */}
                            <h4><span className='release_name'>{distillery.name}</span></h4>
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

                  <h4 style={{ marginBottom: '15px', marginTop: '30px', marginLeft: '5px' }}>CHECK OTHER DISTILLERIES</h4>
                  {distilleriesByCompanyId &&
                    distilleriesByCompanyId.length > 0 &&
                    distilleriesByCompanyId.slice(2).map((distillery, index) => (
                      <div key={index} className="col-lg-6">
                        <div className="release-item">
                          <div className="release-item-img">
                            <img src={IMAGE_BASE_URL + distillery.logo} className="img-fluid" alt="img" />
                          </div>
                          <div className="release-item-content">
                            <h2>
                              {distillery.story}
                              {/* <Link href="#" className="name_edit">
                            <img src={NameEditImage} alt="img" width="20" />
                          </Link> */}
                            </h2>
                            <h4>{distillery.name}</h4>
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

export default Distilleries;
