# jQuery plugin - Wizard (section transition)

jQuery plugin written for easy slide transitions between html sections.


## Usage

Distribute the HTML content over multiple section tags and give them id's.
Use anchor tags to link to the different sections.
Enclose the sections in a div with an id and use it to apply the plugin.
Set the width using css.


## Example

HTML:

    <div id="my-sections">
        <section id="step1">
            <h1>Step 1</h1>
            <p>This is the first step... you can only go forward</p>
            <a href="#step2">Next</a>
        </section>
        <section id="step2">
            <h1>Step 2</h1>
            <p>This is the second step...<br/>
                you can go back to correct or reread stuff...<br/>
                or continue forward</p>
            <a href="#step1">Back</a>
            <a href="#step3">Next</a>
        </section>
        <section id="step3">
            <h1>Step 3</h1>
            <p>Finish line</p>
            <a href="#step2">Back</a>
            <a href="#step1">Reset</a>
        </section>
    </div>


CSS:

    #my-sections {
        width: 300px;
    }
    
    section {
        float: left;
        width: 300px;
    }


Javascript:

    $(document).ready(function(){
        $('#my-sections').wizard();
    });


## License

Copyright (C) 2012

Distributed under either the MIT License or the GNU General Public License (GPL) Version 2
