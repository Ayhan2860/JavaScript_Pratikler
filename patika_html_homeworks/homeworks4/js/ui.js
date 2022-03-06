class UI{
      constructor()
      {
          this.ulDom = document.querySelector('#list');
          this.alertContainer = document.querySelector('#alert-container');
      }
    // Adding task element to UI
    showTaskUI(task)
    {
       var liDom = document.createElement('li');
       liDom.innerText = `${task}`;
       this.ulDom.appendChild(liDom);
    }
     // Adding alert element to UI
    showAlertUI(message, type = "info")
    {
        this.alertContainer.innerHTML +=
        `
        <div class="mr-1" style="position: relative">
      <div style="position: absolute; top: 0; right: 0">
        <div
          id="liveToast"
          class="toast error show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-delay="4000"
        >
          <div>
            <button
              type="button"
              class="close text-center btn-warning btn-sm mt-2 me-2"
              data-bs-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div style="letter-spacing: 3px;" class="toast-body bg-${type} text-center  text-white">${message}</div>
        </div>
      </div>
    </div>
        `;

     //Deleting alert element from UI by time
     setTimeout(() => {
         this.alertContainer.firstElementChild.remove();
     }, 5000);
    }
    

    //Deleting task element to UI
    removeTaskUI(element)
    {
         element.remove();
    }
}