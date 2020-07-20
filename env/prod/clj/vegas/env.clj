(ns vegas.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[vegas started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[vegas has shut down successfully]=-"))
   :middleware identity})
