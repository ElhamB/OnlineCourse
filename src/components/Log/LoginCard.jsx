import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function AdvancedDemo() {
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    

    return (
        <div className="card flex justify-content-center">
            <Card title="Title" subTitle="Subtitle"  header={header} className="md:w-25rem">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
    )
}