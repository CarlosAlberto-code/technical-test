import { Modal } from 'bootstrap';
import imageExclamationMark from '../assets/Group 4029.png';
import React, { useEffect, useRef, useState } from 'react';

export const ShowModalTermsAndConditions = () => {
    const [modal, setModal] = useState(null)
    const exampleModal = useRef()

    useEffect(() => {
        setModal(
            new Modal(exampleModal.current)
        )
    }, [])

    return (
        <>
            {/* show btn Modal */}
            <button type="button" onClick={() => modal.show()} className="btn btn-link text-white">
                Consulta términos y condiciones
            </button>

            {/* Modal */}
            <div className="modal fade" ref={exampleModal} tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header d-flex flex-column">
                                <img className='img-mini-size' src={imageExclamationMark} alt="signo de exclamación" />
                                <h5 className="modal-title" id="modalLabel">Términos y condiciones</h5>
                        </div>
                        <div className="modal-body">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae at itaque accusamus possimus modi, sequi necessitatibus minima fugit ipsam, laboriosam voluptatum reprehenderit ea voluptas consequuntur provident ab deleniti! Hic, sint!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, at fugiat. Ducimus porro temporibus eos soluta? Ipsa veritatis, assumenda fugit dolores voluptatum, odit quisquam id vel blanditiis, quod non temporibus.
                            </p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, fuga? Quam odit fugit ratione nemo nobis facilis doloribus beatae earum voluptas autem nostrum, dignissimos sapiente. Eligendi ducimus natus eveniet vero.
                                    Cum obcaecati hic et beatae ut laborum tempora laudantium similique illo quam quia iste, ea molestias eligendi ducimus rerum corrupti adipisci aliquid. Tenetur, eius. Eaque ut distinctio inventore praesentium quae.
                                    Excepturi mollitia totam et eveniet id recusandae dolor voluptate ea, aut velit consectetur placeat explicabo. Nam ullam perferendis, exercitationem, natus quod error reiciendis voluptatem alias, vel sint dolorem ex atque.
                                    Enim soluta nulla et, quae ullam perspiciatis id eius. Repellat quis ex reiciendis quos consequatur. Consequuntur voluptates, similique, excepturi officiis at in incidunt culpa, quod a explicabo nihil doloremque beatae.
                                    Repudiandae eos, necessitatibus id quia laudantium maiores est temporibus natus perferendis atque sequi ad obcaecati? Veritatis doloremque excepturi fugiat quasi voluptatibus debitis sed laboriosam! Mollitia illo commodi possimus ullam vero!
                                    Minima, dolorum vel officia incidunt provident repellat ea omnis quo fugiat repudiandae. Ab totam cum debitis, placeat tempora animi accusantium a cumque! Unde magnam blanditiis incidunt suscipit odit perspiciatis minima.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
