

const MainBarButton = ({ logo, text, description, classType }) => {
    return (
        <div className="p-4 flex text-left cursor-pointer hover:border-red">
            {logo}
            <div>
              <p className={classType}>{text}</p>
              <p>{description}</p>
            </div>
          </div>
    )
}

export default MainBarButton
