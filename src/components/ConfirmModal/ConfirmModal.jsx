export default function ConfirmModal({ onClick, title, content }) {
    return (
        <div>
            <div
                className='modal fade'
                id='exampleModal'
                tabIndex={-1}
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
            >
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h1 className='modal-title fs-5' id='exampleModalLabel'>
                                {title}
                            </h1>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
                        </div>
                        <div className='modal-body'>{content}</div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                                Close
                            </button>
                            <button data-bs-dismiss='modal' onClick={onClick} type='button' className='btn btn-primary'>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
