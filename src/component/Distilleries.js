import React from 'react';
import SearchImage from '../assets/images/search.svg';
import ImageItem1 from '../assets/images/item(1).png';
import ImageItem2 from '../assets/images/item(2).png';
import ImageItem3 from '../assets/images/item(3).png';
import ImageItem4 from '../assets/images/item(4).png';
import ImageItem5 from '../assets/images/item(5).png';
import ImageItem6 from '../assets/images/item(6).png';
// import NameEditImage from '../assets/images/name-edit.png';
import RightArrowImage from '../assets/images/rightarrow.png';

import Header from './layout/Header';
import Footer from './layout/Footer';

import { Link } from 'react-router-dom';

function Distilleries() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="release-tab">
          <div className="release-tab-header d-flex align-items-center">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
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
                  <div className="col-lg-6">
                    <div className="release-item">
                      <div className="release-item-img">
                        <img src={ImageItem6} className="img-fluid" alt="img" />
                      </div>
                      <div className="release-item-content">
                        <h2>
                          Sherry oak 25 years old, 2018 release
                          {/* <Link href="#" className="name_edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <img src={NameEditImage} alt="img" width="20" />
                          </Link> */}
                        </h2>
                        <h4>The Macallan</h4>
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
                  <div className="col-lg-6">
                    <div className="release-item">
                      <div className="release-item-img">
                        <img src={ImageItem5} className="img-fluid" alt="img" />
                      </div>
                      <div className="release-item-content">
                        <h2>
                          Sherry oak 25 years old, 2018 release
                          {/* <Link href="#" className="name_edit">
                            <img src={NameEditImage} alt="img" width="20" />
                          </Link> */}
                        </h2>
                        <h4>The Macallan</h4>
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
                  <h4 style={{marginBottom: '15px', marginTop: '30px', marginLeft: '5px'}}>CHECK OTHER DISTILLERIES</h4>
                  <div className="col-lg-6">
                    <div className="release-item">
                      <div className="release-item-img">
                        <img src={ImageItem4} className="img-fluid" alt="img" />
                      </div>
                      <div className="release-item-content">
                        <h2>
                          Sherry oak 25 years old, 2018 release
                          {/* <Link href="#" className="name_edit">
                            <img src={NameEditImage} alt="img" width="20" />
                          </Link> */}
                        </h2>
                        <h4>The Macallan</h4>
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
                  <div className="col-lg-6">
                    <div className="release-item">
                      <div className="release-item-img">
                        <img src={ImageItem3} className="img-fluid" alt="img" />
                      </div>
                      <div className="release-item-content">
                        <h2>
                          Sherry oak 25 years old, 2018 release{' '}
                          {/* <Link href="#" className="name_edit">
                            <img src={NameEditImage} alt="img" width="20" />
                          </Link> */}
                        </h2>
                        <h4>The Macallan</h4>
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
                  <div className="col-lg-6">
                    <div className="release-item">
                      <div className="release-item-img">
                        <img src={ImageItem2} className="img-fluid" alt="img" />
                      </div>
                      <div className="release-item-content">
                        <h2>
                          Sherry oak 25 years old, 2018 release{' '}
                          {/* <Link href="#" className="name_edit">
                            <img src={NameEditImage} alt="img" width="20" />
                          </Link> */}
                        </h2>
                        <h4>The Macallan</h4>
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
                  <div className="col-lg-6">
                    <div className="release-item">
                      <div className="release-item-img">
                        <img src={ImageItem1} className="img-fluid" alt="img" />
                      </div>
                      <div className="release-item-content">
                        <h2>
                          Sherry oak 25 years old, 2018 release{' '}
                          {/* <Link href="#" className="name_edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <img src={NameEditImage} alt="img" width="20" />
                          </Link> */}
                        </h2>
                        <h4>The Macallan</h4>
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
