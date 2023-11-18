import '../../assets/styles/modal.css'

function Modal() {

    return (  
        <>
            <div class="modal">
                <div class="overlay"></div>
                <div class="modal-content">
                    
                    <div class="loading">
                        <svg width="84px" height="48px">
                            <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
                            <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
                        </svg>
                    </div>


                   {/*  <div class="heartbeatloader">
            <svg class="svgdraw" width="100%" height="100%" viewBox="0 0 150 400" xmlns="http://www.w3.org/2000/svg">
                <path class="path" d="M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0" fill="transparent" stroke-width="4" stroke="black"></path>
            </svg>
            <div class="innercircle"></div>
            <div class="outercircle"></div>
        </div> */}
    
                    
                    <h2>Estamos tomando sus signos vitales espere un momento</h2>
                    
                </div>
            </div>
            
        </>
    );
}

export default Modal;