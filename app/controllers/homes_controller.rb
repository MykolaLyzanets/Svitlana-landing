class HomesController < ApplicationController
  def index
    respond_to do |format|
      format.html # Відповідь HTML, якщо запит звичайний
      format.css { render plain: 'body { background-color: red; }', content_type: 'text/css' }
      format.js { render plain: 'console.log("Hello from home.js");', content_type: 'text/javascript' }
    end
  end
end
