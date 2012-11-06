<?php

App::import('Core', 'DboMysqli');

class DboSphinx extends DboMysqli {
    public function setWaitTimeout($timeout_secs) {
        // Overload parent method to do nothing.  Attempting to set a wait timeout
        // on a sphinx connection generates an error.
    }
}