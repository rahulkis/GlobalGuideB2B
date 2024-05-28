import React from 'react';

function Footer() {
  return (
    <>
      <div
        class="edit-heading-modal modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <textarea class="form-control bg-transparent">Sherry oak 25 years old, 2018 release</textarea>
            </div>
            <div class="modal-footer border-top-0">
              <button type="button" class="btn custom_outline_btn" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn custom_btn" data-bs-dismiss="modal">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
